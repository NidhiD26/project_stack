import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useMemo, useRef } from "react"
import { motion } from "framer-motion"

function StackedBlocks() {
  const group = useRef<THREE.Group>(null)
  const blocks = useMemo(() => {
    const materials = [
      new THREE.MeshStandardMaterial({
        color: "#0ff",
        emissive: "#00cfd9",
        emissiveIntensity: 0.1,
        metalness: 0.5,
        roughness: 0.25,
      }),
      new THREE.MeshStandardMaterial({
        color: "#a24dff",
        emissive: "#6a2cff",
        emissiveIntensity: 0.08,
        metalness: 0.6,
        roughness: 0.3,
      }),
      new THREE.MeshStandardMaterial({ color: "#bfc3c7", metalness: 0.9, roughness: 0.15 }),
    ]
    const geom = new THREE.BoxGeometry(1, 0.25, 1)
    return Array.from({ length: 6 }).map((_, i) => {
      const mesh = new THREE.Mesh(geom, materials[i % materials.length])
      mesh.position.set((Math.random() - 0.5) * 0.3, i * 0.3, (Math.random() - 0.5) * 0.3)
      mesh.rotation.set(0, Math.random() * Math.PI * 0.25, 0)
      mesh.castShadow = true
      mesh.receiveShadow = true
      return mesh
    })
  }, [])

  useFrame((state) => {
    if (!group.current) return
    const { mouse } = state
    // gentle tilt by cursor
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.2, 0.08)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.3, 0.08)
  })

  return (
    <group ref={group}>
      {blocks.map((m, i) => (
        <primitive key={i} object={m} />
      ))}
    </group>
  )
}

export default function StackHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }}
      className="absolute inset-0"
    >
      <Canvas camera={{ position: [1.8, 1.6, 2.2], fov: 45 }} gl={{ antialias: true, alpha: true }} shadows>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 4, 3]} intensity={1.2} castShadow color={"#8fd7ff"} />
        <pointLight position={[-2, 1, -2]} intensity={0.6} color={"#a24dff"} />

        <StackedBlocks />

        {/* Ground fade */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
          <planeGeometry args={[8, 8]} />
          <meshStandardMaterial transparent opacity={0.2} color={"#1a1b1f"} />
        </mesh>
      </Canvas>

      {/* Static fallback overlay for non-WebGL (simplified silhouette) */}
      <noscript>
        <div className="flex h-full w-full items-center justify-center text-center text-sm opacity-70">
          Enable JavaScript to view the 3D stack.
        </div>
      </noscript>
    </motion.div>
  )
}