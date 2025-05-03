/**
 * A Zustand-based custom hook for managing the state of an information modal.
 * This hook provides functionality to open and close a modal with a specific movie ID.
 *
 * @interface ModalStoreInterface
 * - `movieId` (string): The ID of the movie associated with the modal.
 * - `isOpen` (boolean): Indicates whether the modal is currently open.
 * - `openModal(movieId: string): void`: Opens the modal and sets the associated movie ID.
 * - `closeModal(): void`: Closes the modal and clears the movie ID.
 *
 * @component
 * This hook is typically used in conjunction with the `InfoModal` component to manage its visibility
 * and the movie data it displays. The `InfoModal` component can consume the state and actions provided
 * by this hook to render the modal dynamically based on the current state.
 *
 *
 * @example
 * // Import the hook
 * import useInfoModal from 'path-to-hooks/useInfoModal';
 *
 * // Access modal state and actions
 * const { isOpen, movieId, openModal, closeModal } = useInfoModal();
 *
 * // Open the modal with a specific movie ID
 * openModal('12345');
 *
 * // Close the modal
 * closeModal();
 */
import { create } from 'zustand'

export interface ModalStoreInterface {
    movieId : string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
    movieId: '',
    isOpen: false,
    openModal: (movieId: string) => set({ isOpen: true, movieId }),
    closeModal: () => set({ isOpen: false, movieId: '' }),
}))

export default useInfoModal;