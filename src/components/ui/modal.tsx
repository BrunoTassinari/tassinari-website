import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './icon';
import { List } from './list';

interface ModalProps {
  children: any;
  showModal: boolean;
}

interface ModalProjectProps {
  project: any;
  showModal: boolean;
  setShowModal: any;
}

export const Modal = ({ showModal, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="w-screen h-screen bg-color-bg fixed top-0 right-0 z-30"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalProject = ({
  showModal,
  setShowModal,
  project,
}: ModalProjectProps) => {
  return (
    <Modal showModal={showModal}>
      <>
        <div>
          <img
            src={`/${project.image}.png`}
            alt={project.alt}
            className="object-cover"
          />
        </div>
        <div className="flex justify-between items-center pt-5 px-4 py-1 border-t-[1px] border-t-color-primary dark:border-t-color-primary ">
          <div className="flex items-center">
            <p className="text-2xl font-bold text-color-primary truncate block capitalize mr-3">
              {project.title}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label="open projects"
            >
              <Icon icon="arrowRight" size={24} />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            aria-label="close modal"
          >
            <Icon icon="closeMenu" size={24} />
          </button>
        </div>
        <div className="px-4 py-1">
          <p className="text-base text-color-text">{project.description}</p>
        </div>
        <div className="px-4">
          <List items={project.stack} type="row" highlight />
        </div>
      </>
    </Modal>
  );
};
