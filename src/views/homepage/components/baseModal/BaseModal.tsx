import { AnimatePresence, motion } from "framer-motion";
import { dropIn } from "@shared/animations/modal";
import { Icon } from "@iconify/react";

interface BaseModalProps {
	isOpen: boolean;
	onClose: VoidFunction;
	children: React.ReactNode;
	hasCloseButton?: boolean;
}

export const BaseModal = ({
	isOpen,
	onClose,
	children,
	hasCloseButton = false,
}: BaseModalProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[1001] flex justify-center items-center"
						onClick={onClose}
					>
						<motion.div
							onClick={(e) => e.stopPropagation()}
							variants={dropIn}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-[80%]"
						>
							{hasCloseButton ? (
								<button onClick={onClose} className="absolute top-3 right-3">
									<Icon width={24} icon="ri:close-fill" />
								</button>
							) : null}
							{children}
						</motion.div>
					</motion.div>
					<div className="opacity-25 fixed inset-0 z-[1000] bg-black"></div>
				</>
			)}
		</AnimatePresence>
	);
};
