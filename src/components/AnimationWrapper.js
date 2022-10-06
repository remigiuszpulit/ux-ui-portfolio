import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./Loader";

function AnimationWrapper({ key, loaderKey, color, children }) {
  return (
    <AnimatePresence>
      <motion.div
        key={loaderKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <React.Suspense fallback={<Loader color={color} />}>
          <AnimatePresence>
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </React.Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimationWrapper;
