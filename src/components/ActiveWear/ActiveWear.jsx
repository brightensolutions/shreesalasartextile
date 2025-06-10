import { useEffect, useRef } from "react"

const ActiveWearComponent = () => {
  const iframeRef = useRef(null)

  useEffect(() => {
    // Function to handle iframe loading and ensure proper aspect ratio
    const handleIframeLoad = () => {
      if (iframeRef.current) {
        const iframe = iframeRef.current
        const aspectRatio = 16 / 9 // Standard YouTube aspect ratio
        const width = iframe.clientWidth
        iframe.style.height = `${width / aspectRatio}px`
      }
    }

    // Add event listeners
    window.addEventListener("resize", handleIframeLoad)
    if (iframeRef.current) {
      iframeRef.current.addEventListener("load", handleIframeLoad)
    }

    // Initial call
    handleIframeLoad()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleIframeLoad)
      if (iframeRef.current) {
        iframeRef.current.removeEventListener("load", handleIframeLoad)
      }
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <iframe
        ref={iframeRef}
        className="w-full"
        src="https://www.youtube.com/embed/tmJ5xlWRrl8?autoplay=1&mute=1&loop=1&playlist=tmJ5xlWRrl8&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
        title="Background Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  )
}

export default ActiveWearComponent

