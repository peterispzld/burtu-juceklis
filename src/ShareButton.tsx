import { OkButton } from './DefinitionDialog';
import twitterSvg from './assets/x-twitter.svg';

// ShareButton Component
const ShareButton = ({
  handleShareClick,
}: {
  handleShareClick: () => void;
}) => {
  return (
    <OkButton
      onClick={handleShareClick}
      style={{ backgroundColor: '#fafafa', color: 'inherit' }}
    >
      <div style={{ display: 'flex', gap: 8 }}>
        Dalīties <img src={twitterSvg} alt="Twitter" width={16} />
      </div>
    </OkButton>
  );
};

export default ShareButton;
