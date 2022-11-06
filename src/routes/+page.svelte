<script lang="ts">

import * as bootstrap from "../css/bootstrap.css"
import * as index from "../css/index.css"

let stuffs: HTMLDivElement

</script>

<h1>
    Visualizerization
</h1><br>
<h4>
    Render Charts at the click of a button in seconds!
</h4>

<div class="stuff" bind:this={stuffs}>
    <!-- there will be stuff that added here for render chart plus showing types-->
</div>

<textarea class="text_chart" placeholder="Please enter your chart name" rows="10" cols="50"></textarea>

<div class="selection_area">
    <textarea class="data_name" placeholder="Your data name"></textarea>
    <textarea class="data" placeholder="Your data"></textarea>
    <button class="add" on:click={
        function(){
            stuffs.innerHTML += `<br><ul>${document.getElementsByClassName("data_name").value}: ${document.getElementsByClassName("data")}</ul>`
        }
    }>Add</button>
</div>
