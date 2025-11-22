import { useRef, useEffect, useState } from "react";
import {VantaLayer} from "./styles";

interface VantaBackgroundProps {
    color?: number;
    backgroundColor?: number;
    showDots?: boolean;
    points?: number;
    maxDistance?: number;
    spacing?: number;
}

export function VantaBackground({
    color = 0x00c46f,
    backgroundColor = 0x222222,
    showDots = true,
    points = 11.00,
    maxDistance = 18.00,
    spacing = 13.00,
}: VantaBackgroundProps) 
 {

    const containerRef = useRef<HTMLDivElement>(null);
    const vantaRef = useRef<any>(null);

    // State to track mobile size (default false)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen size once on mount (or add resize listener if you want dynamic updates)
        const checkMobile = () => setIsMobile(window.innerWidth <= 425);
        checkMobile();

        // Optional: update on resize
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Determine spacing based on device size
    const currentSpacing = isMobile ? 15.4 : spacing

    useEffect(() => {
        function init() {
            const VANTA = (window as any).VANTA;
            const THREE = (window as any).THREE;
            
            if (!containerRef.current || !VANTA || !THREE) return;

            vantaRef.current = VANTA.NET({
                el: containerRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,
                color,
                backgroundColor,
                showDots,
                points,
                maxDistance,
                spacing: currentSpacing,
            });
        }

        // Wait for CDN scripts to be ready
        if ((window as any).VANTA && (window as any).THREE) {
            init();
        } else {
            const onLoad = () => init();
            window.addEventListener('load', onLoad);
            return () => window.removeEventListener('load', onLoad);
        }

        return () => {
            vantaRef.current?.destroy();
            vantaRef.current = null;
        };
    }, [color, backgroundColor, showDots, points, maxDistance, spacing, currentSpacing]);

    // Handle window resize to ensure Vanta adjusts properly
    useEffect(() => {
        const handleResize = () => {
            if (vantaRef.current) {
                vantaRef.current.resize();
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <>
    <VantaLayer ref={containerRef}/>
        
    </>
    )
}
