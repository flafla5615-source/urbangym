"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

type MapCoordinate = { lat: () => number; lng: () => number };
type MapSize = { width: number; height: number };
type MapInstance = {
  destroy: () => void;
  setCenter: (center: MapCoordinate) => void;
  setSize: (size: MapSize) => void;
};
type NaverMaps = {
  LatLng: new (latitude: number, longitude: number) => MapCoordinate;
  Size: new (width: number, height: number) => MapSize;
  Point: new (x: number, y: number) => { x: number; y: number };
  Map: new (element: HTMLElement, options: {
    center: MapCoordinate;
    zoom: number;
    minZoom: number;
    scrollWheel: boolean;
    zoomControl: boolean;
    zoomControlOptions: { position: number };
  }) => MapInstance;
  Marker: new (options: {
    position: MapCoordinate;
    map: MapInstance;
    title: string;
    icon: { content: string; anchor: { x: number; y: number } };
  }) => { setMap: (map: MapInstance | null) => void };
  Position: { TOP_RIGHT: number };
};

declare global {
  interface Window {
    naver?: { maps: NaverMaps };
    navermap_authFailure?: () => void;
  }
}

export default function NaverMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px" });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const previousHandler = window.navermap_authFailure;
    const handleAuthFailure = () => setHasError(true);
    window.navermap_authFailure = handleAuthFailure;
    return () => {
      if (window.navermap_authFailure === handleAuthFailure) {
        window.navermap_authFailure = previousHandler;
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || sdkReady || hasError) return;
    const timer = window.setTimeout(() => setHasError(true), 15000);
    return () => window.clearTimeout(timer);
  }, [isVisible, sdkReady, hasError]);

  useEffect(() => {
    const element = mapRef.current;
    const maps = window.naver?.maps;
    if (!sdkReady || hasError || !element) return;
    if (!maps) {
      setHasError(true);
      return;
    }

    let map: MapInstance | undefined;
    let marker: { setMap: (map: MapInstance | null) => void } | undefined;
    let resizeObserver: ResizeObserver | undefined;
    try {
      const center = new maps.LatLng(site.map.latitude, site.map.longitude);
      map = new maps.Map(element, {
        center,
        zoom: 17,
        minZoom: 10,
        scrollWheel: false,
        zoomControl: true,
        zoomControlOptions: { position: maps.Position.TOP_RIGHT },
      });
      marker = new maps.Marker({
        position: center,
        map,
        title: "어반짐 평거점 · 지원빌딩 6·7층",
        icon: {
          content: `<div style="width:170px;text-align:center;font-family:Arial,sans-serif">
            <div style="padding:13px 15px;background:#191b19;border:2px solid white;border-radius:14px;color:white;box-shadow:0 6px 20px #0003">
              <strong style="display:block;font-size:15px;line-height:1.4">어반짐 평거점</strong>
              <span style="display:block;margin-top:3px;font-size:11px;color:#d3ddd0">지원빌딩 6·7층</span>
            </div>
            <div style="width:0;height:0;margin:-1px auto 0;border-left:9px solid transparent;border-right:9px solid transparent;border-top:12px solid #191b19"></div>
          </div>`,
          anchor: new maps.Point(85, 82),
        },
      });
      const activeMap = map;
      const frame = element.parentElement!;
      resizeObserver = new ResizeObserver(() => {
        const { width, height } = frame.getBoundingClientRect();
        if (width > 0 && height > 0) {
          activeMap.setSize(new maps.Size(width, height));
          activeMap.setCenter(center);
        }
      });
      resizeObserver.observe(frame);
      setMapReady(true);
    } catch {
      setHasError(true);
    }

    return () => {
      resizeObserver?.disconnect();
      marker?.setMap(null);
      map?.destroy();
    };
  }, [sdkReady, hasError]);

  return (
    <div ref={containerRef} className="flex min-h-[440px] flex-col bg-warm-200 lg:min-h-[560px]">
      {isVisible ? (
        <Script
          id="urban-gym-naver-map"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${site.map.clientId}`}
          strategy="afterInteractive"
          onReady={() => setSdkReady(true)}
          onError={() => setHasError(true)}
        />
      ) : null}
      <div className="relative min-h-[360px] flex-1 lg:min-h-[480px]">
        <div className="absolute inset-0">
          <div
            ref={mapRef}
            role="region"
            aria-label="어반짐 평거점 위치를 표시한 네이버 지도"
            className="h-full w-full"
          />
        </div>
        {!mapReady || hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-warm-200 px-8 text-center">
            <p role="status" className="text-[14px] leading-relaxed text-ink">
              {hasError ? "지도를 불러오지 못했습니다." : "네이버 지도를 불러오는 중입니다."}
            </p>
            <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-6 py-3 text-[13px] font-semibold text-white">
              네이버 지도에서 위치 보기 ↗
            </a>
          </div>
        ) : null}
      </div>
      <div className="border-t border-warm-300 bg-warm-50 px-6 py-5 sm:px-8">
        <p className="text-[14px] font-semibold text-ink">{site.brand.ko} · {site.contact.addressDetail}</p>
        <p className="mt-1.5 text-[12px] leading-relaxed text-warm-500">{site.contact.parking}</p>
      </div>
    </div>
  );
}
