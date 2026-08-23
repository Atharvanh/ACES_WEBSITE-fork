import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function WebGLBackground({ className, style }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // StrictMode-safe cancellation flag
    let cancelled = false;

    const isMobile = window.innerWidth < 768;
    const getWidth = () => container.clientWidth || window.innerWidth;
    const getHeight = () => container.clientHeight || window.innerHeight;

    let width = getWidth();
    let height = getHeight();

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Particle Field ---
    const particlesCount = isMobile ? 600 : 1200;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 110;
      posArray[i + 1] = (Math.random() - 0.5) * 90;
      posArray[i + 2] = (Math.random() - 0.5) * 60;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const canvasPoint = document.createElement('canvas');
    canvasPoint.width = 16;
    canvasPoint.height = 16;
    const pctx = canvasPoint.getContext('2d');
    pctx.fillStyle = '#B22B2F';
    pctx.fillRect(2, 2, 12, 12);
    const particleTexture = new THREE.CanvasTexture(canvasPoint);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // --- Dynamic Constellation Nodes ---
    const dynamicNodeCount = isMobile ? 40 : 75;
    const dynamicNodes = [];
    for (let i = 0; i < dynamicNodeCount; i++) {
      dynamicNodes.push({
        x: (Math.random() - 0.5) * 70,
        y: (Math.random() - 0.5) * 55,
        z: (Math.random() - 0.5) * 35,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        vz: (Math.random() - 0.5) * 0.03,
      });
    }

    const maxConnections = isMobile ? 80 : 150;
    const dynamicLinesGeometry = new THREE.BufferGeometry();
    const dynamicLinePositions = new Float32Array(maxConnections * 6);
    dynamicLinesGeometry.setAttribute('position', new THREE.BufferAttribute(dynamicLinePositions, 3));

    const dynamicLineMaterial = new THREE.LineBasicMaterial({
      color: 0xB22B2F,
      transparent: true,
      opacity: 0.28,
      linewidth: 1,
    });
    const dynamicLinesMesh = new THREE.LineSegments(dynamicLinesGeometry, dynamicLineMaterial);
    scene.add(dynamicLinesMesh);

    // --- Crossing Rays ---
    const rayCount = isMobile ? 30 : 55;
    const raysGeometry = new THREE.BufferGeometry();
    const rayPositions = [];
    for (let i = 0; i < rayCount; i++) {
      const startX = (Math.random() - 0.5) * 70;
      const startY = (Math.random() - 0.5) * 55;
      const startZ = (Math.random() - 0.5) * 40;
      const endX = (Math.random() - 0.5) * 70;
      const endY = (Math.random() - 0.5) * 55;
      const endZ = (Math.random() - 0.5) * 40;
      rayPositions.push(startX, startY, startZ, endX, endY, endZ);
    }
    raysGeometry.setAttribute('position', new THREE.Float32BufferAttribute(rayPositions, 3));

    const rayMaterial = new THREE.LineBasicMaterial({
      color: 0x887775,
      transparent: true,
      opacity: 0.25,
      linewidth: 1,
    });
    const raysMesh = new THREE.LineSegments(raysGeometry, rayMaterial);
    scene.add(raysMesh);

    // --- Floating Cubes ---
    const cubeCount = isMobile ? 10 : 18;
    const cubeGroup = new THREE.Group();
    const cubeGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.7);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xB22B2F, transparent: true, opacity: 0.7 });
    const goldCubeMaterial = new THREE.MeshBasicMaterial({ color: 0xD1A550, transparent: true, opacity: 0.8 });

    for (let i = 0; i < cubeCount; i++) {
      const cube = new THREE.Mesh(cubeGeometry, i % 3 === 0 ? goldCubeMaterial : cubeMaterial);
      cube.position.set(
        (Math.random() - 0.5) * 65,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 30
      );
      const s = Math.random() * 0.9 + 0.3;
      cube.scale.set(s, s, 0.1);
      cubeGroup.add(cube);
    }
    scene.add(cubeGroup);

    // --- Mouse Interaction (Camera Parallax) ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- Animation Loop (StrictMode-safe: checks `cancelled` flag) ---
    const animate = () => {
      if (cancelled) return;

      requestAnimationFrame(animate);

      // Slow elegant 3D drift
      particlesMesh.rotation.y += 0.0006;
      particlesMesh.rotation.x += 0.0003;
      raysMesh.rotation.y += 0.0006;
      raysMesh.rotation.x += 0.0003;
      cubeGroup.rotation.y += 0.0006;
      cubeGroup.rotation.x += 0.0003;

      // Update dynamic constellation nodes
      let lineIndex = 0;
      const positions = dynamicLinesGeometry.attributes.position.array;

      for (let i = 0; i < dynamicNodes.length; i++) {
        const n1 = dynamicNodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.z += n1.vz;

        if (n1.x < -35 || n1.x > 35) n1.vx *= -1;
        if (n1.y < -28 || n1.y > 28) n1.vy *= -1;
        if (n1.z < -20 || n1.z > 20) n1.vz *= -1;

        for (let j = i + 1; j < dynamicNodes.length; j++) {
          if (lineIndex >= maxConnections * 6) break;
          const n2 = dynamicNodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y, n1.z - n2.z);

          if (dist < 15) {
            positions[lineIndex++] = n1.x;
            positions[lineIndex++] = n1.y;
            positions[lineIndex++] = n1.z;
            positions[lineIndex++] = n2.x;
            positions[lineIndex++] = n2.y;
            positions[lineIndex++] = n2.z;
          }
        }
      }

      // Zero out remaining lines
      for (let k = lineIndex; k < maxConnections * 6; k++) {
        positions[k] = 0;
      }
      dynamicLinesGeometry.attributes.position.needsUpdate = true;

      // Smooth camera parallax
      targetX = mouseX * 5;
      targetY = -mouseY * 5;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      width = getWidth();
      height = getHeight();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup (StrictMode-safe) ---
    return () => {
      cancelled = true;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particleTexture.dispose();
      dynamicLinesGeometry.dispose();
      dynamicLineMaterial.dispose();
      raysGeometry.dispose();
      rayMaterial.dispose();
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      goldCubeMaterial.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="webgl-container"
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
        ...style
      }}
    />
  );
}
