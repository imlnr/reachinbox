import { Image } from "@chakra-ui/react";
import noMailIllustration from "../assets/No Message illustration.png";
import { Box, Typography } from "@mui/material";
function NoMail() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingTop: "100px ",
          gap: "40px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={noMailIllustration}
          sx={{
            width: "280.02px",
            // height: "229.4px",
          }}
          alt={"noMailIllustration"}
        />
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "36.53px",
            textAlign: "center",
          }}
        >
          It’s the beginning of a legendary sales pipeline
        </Typography>
        <Typography
          sx={{
            width: "289px",
            textAlign: "center",
            height: "54px",
            color: "#9E9E9E"
          }}
        >
          When you have inbound E-mails you’ll see them here
        </Typography>
      </Box>
    </>
  );
}

export default NoMail;
