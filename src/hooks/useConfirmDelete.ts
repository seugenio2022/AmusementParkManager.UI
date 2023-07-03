import { useState } from "react";

function useConfirmDelete() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const [idToDelete, setIdToDelete] = useState<number>(0);

	const open = () => {
		setOpen(true);
	};

	const close = () => {
		setOpen(false);
	};
	return { isOpen, open, close, idToDelete, setIdToDelete }
}
export default useConfirmDelete