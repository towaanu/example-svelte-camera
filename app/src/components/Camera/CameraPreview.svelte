<script>
    export let mediaStream
    export let previewHeight = ""
    export let previewWidth = ""

    function srcObject(node, stream) {
        node.srcObject = stream;
        return {
            update(newStream) {
                if (node.srcObject != newStream) {
                    node.srcObject = newStream
                }
            }
        }
    }
</script>
<video use:srcObject={mediaStream} width={previewWidth} height={previewHeight} autoplay playsinline>
</video>