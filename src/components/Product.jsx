import styles from "./Product.module.css";
import styled from "styled-components";

const StyledProductTextContainer = styled.div`
  position: absolute;
  top: 1.5em;
  padding-left: 1.5em;
  padding-top: 1.5em;
  color: ${(props) => props.$textColor || "white"};
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const StyledProductContainer = styled.div`
  max-width: 28rem;
  position: relative;
  transition: transform ${(props) => props.$transition || "0.1s"} ease-in-out;

  &:hover {
    transform: scale(${(props) => props.$scale || 1.05});
    cursor: pointer;
  }
`;

function Product({
  image,
  title,
  detail,
  textColor,
  scale = 1.05,
  transition = "0.5s",
  onProductClick,
}) {
  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "0.5rem",
  };
  return (
    <StyledProductContainer
      $scale={scale}
      $transition={transition}
      onClick={() => onProductClick?.(title)}
    >
      <img style={imgStyle} src={image} alt={title} />
      <StyledProductTextContainer $textColor={textColor}>
        <div className={styles.productTitle}>{title}</div>
        <div className={styles["product-detail"]}>{detail}</div>
      </StyledProductTextContainer>
    </StyledProductContainer>
  );
}

export default Product;
