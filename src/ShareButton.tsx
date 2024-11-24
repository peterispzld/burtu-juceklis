import { OkButton } from './DefinitionDialog';
import threadsSvg from './assets/threads-brands-solid.svg';

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
        Dalīties <img src={threadsSvg} alt="Threads" width={16} />
      </div>
    </OkButton>
  );
};

export default ShareButton;
