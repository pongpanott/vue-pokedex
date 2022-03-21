<template>
	<div
		class="rounded min-w-[100px] h-[18px] text-[10px] text-center bg-gray-100"
	>
		{{ name }}
	</div>
</template>

<script>
export default {
	name: "BaseAbilityBadge",
	props: {
		name: {
			type: String,
			required: true,
		},
	},
};
</script>
