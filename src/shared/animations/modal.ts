export const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.5,
			type: "spring",
			damping: 50,
			stiffness: 300,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
		transition: {
			duration: 0.3,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
};
