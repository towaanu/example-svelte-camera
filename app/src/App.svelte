<script>
    import CameraCapture from './CameraPreview.svelte'
    
    import { getMediaStream } from './helpers/cameraHelper'

    const mediaStreamPromise = getMediaStream()
</script>

<style>
    h1 {
        color: blue;
    }
</style>

<h1>Hello world !</h1>

{#await mediaStreamPromise}
    <h1>Waiting for camera....</h1>
{:then mediaStream}
    <CameraCapture mediaStream={mediaStream}/>
{:catch error}
    <h1>Error: {error.message}</h1>
{/await}