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
          className="w-screen h-screen fixed top-0 right-0 z-30 lg:left-80 lg:top-40 lg:h-[80%] lg:w-[80%] dark:bg-dark-bg"
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
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-color-bg-secondary outline-none focus:outline-none">
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
              {/* body */}
              <div className="relative p-4 flex-auto">
                <p className="my-2 text-blueGray-500 text-sm lg:text-base leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <List items={project.stack} type="row" highlight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
      </>
    </Modal>
  );
};
