<template>
	<aside class="popup" v-if="opened">
		<slot></slot>
	</aside>
</template>

<script>
export default {
	name: "Popup",
	props : {
		opened : {
			default : false
		}
	}
}
</script>

<style>

	.popup{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,0.2);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.popup__body{

	}

</style>