import { useTranslation } from 'react-i18next';
import * as Styled from './PageHeader.styles';

export type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  const { t } = useTranslation();
  return (
    <Styled.PageHeaderContainer>
      <h1>{t(title)}</h1>
    </Styled.PageHeaderContainer>
  );
};

export default PageHeader;
