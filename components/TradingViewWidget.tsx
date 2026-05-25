"use client";
import useTradingViewWidget from "@/Hooks/UseTradingViewWidget";
import React, { useRef, memo } from "react";
import { cn } from '@/lib/utils';

interface TradingViewwidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className,
}: TradingViewwidgetProps) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);
  return ( 
    <div className="w-full">
        {title && <h3 className="font-semibold text-2xl text-gray-100">{title}</h3>}
      <div
        className="tradingview-widget-container"
        ref={containerRef}
        style={{ height, width: "100%" }}
      />
        <div
          className={cn('tradingview-widget-container__widget',className)}
        ></div>
      </div>
  );
};

export default memo(TradingViewWidget);
