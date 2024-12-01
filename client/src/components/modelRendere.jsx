import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null); // Ref for the container
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            55,
            container.clientWidth / container.clientHeight, // Use container dimensions for aspect ratio
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true, // Turn on antialiasing
        });

        // Set the size of the renderer based on container
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Reduce pixel ratio for less GPU load

        // Create a basic light source
        const light = new THREE.AmbientLight(0xffffff, 0.5); // Reduced intensity for better performance
        scene.add(light);

        // Add a directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // Reduced intensity
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Load the 3D model using GLTFLoader
        const loader = new GLTFLoader();
        loader.load(
            '../assets/model/portfolioModel.glb',
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.8, 0.8, 0.8);
                model.position.x = -1.5;

                // Enable frustum culling to prevent rendering parts of the model out of view
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.frustumCulled = true;
                    }
                });

                scene.add(model);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error) => {
                console.error('An error occurred while loading the model:', error);
            }
        );

        // Adjust camera position
        camera.position.set(0, 2, 5);
        camera.lookAt(0, 0, 0.7);

        // Add OrbitControls for mouse gestures
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Adds smooth damping effect
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.8; // Speed of rotation
        controls.zoomSpeed = 1.2; // Speed of zoom
        controls.target.set(0, 0.7, 0); // Focus point
        controls.update();

        // Animation loop with frame rate control
        let lastTime = 0;
        const maxFPS = 60;
        const animate = (time) => {
            if (isAnimating) {
                requestAnimationFrame(animate);
                const delta = time - lastTime;
                if (delta > 1000 / maxFPS) {
                    controls.update(); // Update the controls for smooth interactions
                    renderer.render(scene, camera);
                    lastTime = time;
                }
            }
        };

        animate();

        // Adjust canvas size on container resize
        const resizeObserver = new ResizeObserver(() => {
            if (container) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        });

        // Observe the container for size changes
        resizeObserver.observe(container);

        // Clean up on component unmount
        return () => {
            resizeObserver.disconnect();
            controls.dispose(); // Clean up controls
        };
    }, [isAnimating]);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'transparent',
                }}
            />
        </div>
    );
};

export default ModelViewer;
