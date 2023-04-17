// Chakra imports
import { Box, Flex, Icon, Center } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
// Custom components
// Assets

function AuthIllustration(props) {
  const { children, illustrationBackground } = props;
  // Chakra color mode
  return (
    <Center>
      <Flex justifyContent="start" direction="column">
        {children}
      </Flex>
      <FixedPlugin />
    </Center>
  );
}
// PROPS

AuthIllustration.propTypes = {
  illustrationBackground: PropTypes.string,
  image: PropTypes.any,
};

export default AuthIllustration;
