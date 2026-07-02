import styles from "./Product.module.css";
import styled from "styled-components";

const StyledProductContainer = styled.div`
  maxWidth: 28rem;
  position: relative;
  transition: transform ${(props) => props.transition || "0.1s"} ease-in-out;

  &:hover {
    transform: scale(${(props) => props.scale || 1.05});
    cursor: pointer;
`;

function Product({
  image,
  title,
  detail,
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
      scale={scale}
      transition={transition}
      onClick={() => onProductClick(title)}
    >
      <img style={imgStyle} src={image} alt={title} />
      <div className={styles.productTextContainer}>
        <div className={styles.productTitle}>{title}</div>
        <div className={styles["product-detail"]}>{detail}</div>
      </div>
    </StyledProductContainer>
  );
}

export default Product;
