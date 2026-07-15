import type { ReactNode } from "react";

const MainLayout = ({
  header,
  content,
  footer,
}: {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}) => {
  return (
    <div className="bg-apple-light dark:bg-apple-dark">
      {header ?? <h1>default header</h1>}
      {content ?? <p>default content</p>}
      {footer ?? <p>default footer</p>}
    </div>
  );
};

export default MainLayout;
// 这个组件是一个简单的布局组件，它接收三个 props：header、content 和 footer。
// 如果没有传入这些 props，它会使用默认的标题、内容和页脚。
