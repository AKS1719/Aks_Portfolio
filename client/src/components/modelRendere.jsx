import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            55,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
        });

        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

        const light = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(light);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        let model;
        let mixer;
        const clock = new THREE.Clock();

        loader.load(
            '../assets/model/2.glb', // Path to the .glb file
            (gltf) => {
                model = gltf.scene;
                scene.add(model);

                console.log('Model loaded:', model);
                console.log('Animations:', gltf.animations);

                if (gltf.animations.length > 0) {
                    // Create a single AnimationMixer for the whole model
                    mixer = new THREE.AnimationMixer(model);

                    gltf.animations.forEach((clip) => {
                        const action = mixer.clipAction(clip);
                        action.setLoop(THREE.LoopOnce); // Play only once
                        action.clampWhenFinished = true;
                        action.play();
                    });
                } else {
                    console.log('No animations found in the model.');
                }

                model.scale.set(0.7, 0.7, 0.7);
                model.position.set(-1.5, 0, 0);
            },
            (xhr) => {
                console.log(`Loading model: ${(xhr.loaded / xhr.total) * 100}%`);
            },
            (error) => {
                console.error('An error occurred while loading the model:', error);
            }
        );

        const controls = new OrbitControls(camera, renderer.domElement);

        // Animation loop
        const animate = () => {
            if (isAnimating) {
                requestAnimationFrame(animate);
                const delta = clock.getDelta();
                if (mixer) {
                    mixer.update(delta);
                }
                controls.update();
                renderer.render(scene, camera);
            }
        };

        animate();

        // Camera setup
        camera.position.set(0, 2, 5);
        camera.lookAt(0, 0, 0.7);

        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.8;
        controls.zoomSpeed = 1.2;
        controls.target.set(0, 0.7, 0);
        controls.update();

        const resizeObserver = new ResizeObserver(() => {
            if (container) {
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            }
        });

        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
            controls.dispose();
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
