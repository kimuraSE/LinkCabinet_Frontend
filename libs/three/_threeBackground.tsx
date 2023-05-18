import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Three.jsの初期化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    containerRef.current?.appendChild(renderer.domElement);

    // 球の作成
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: "#FF0000" });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // カメラの位置調整
    camera.position.z = 5;

    // 球の初期位置と移動速度
    let spherePosition = new THREE.Vector3();
    let moveSpeed = new THREE.Vector3(
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01,
      (Math.random() - 0.5) * 0.01
    );

    // アニメーションの更新
    const animate = () => {
      requestAnimationFrame(animate);
      // 球の移動
      spherePosition.add(moveSpeed);
      if (
        spherePosition.x > 2 ||
        spherePosition.x < -2 ||
        spherePosition.y > 2 ||
        spherePosition.y < -2 ||
        spherePosition.z > 2 ||
        spherePosition.z < -2
      ) {
        moveSpeed.x = (Math.random() - 0.5) * 0.01;
        moveSpeed.y = (Math.random() - 0.5) * 0.01;
        moveSpeed.z = (Math.random() - 0.5) * 0.01;
      }
      sphere.position.copy(spherePosition);
      renderer.render(scene, camera);
    };
    animate();

    // ウィンドウのリサイズ時にカメラとレンダラーのサイズを調整
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // コンポーネントのアンマウント時にThree.jsのリソースを解放
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute -z-10" />;
}
