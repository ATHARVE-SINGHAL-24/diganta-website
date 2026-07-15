"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarfieldBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    mountRef.current.appendChild(renderer.domElement);

    // Stars

    const starGeometry = new THREE.BufferGeometry();

    const starCount = 2500;

    const positions = [];

    for (let i = 0; i < starCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);

    scene.add(stars);

    function animate() {
      requestAnimationFrame(animate);

      stars.rotation.y += 0.0004;
      stars.rotation.x += 0.00015;

      renderer.render(scene, camera);
    }

    animate();

    function resize() {
      camera.aspect = window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);

      mountRef.current.removeChild(renderer.domElement);

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
}