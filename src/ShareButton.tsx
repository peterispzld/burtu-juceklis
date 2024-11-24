import { OkButton } from './DefinitionDialog';
import blueskySvg from './assets/bluesky-brands-solid.svg';

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
        Dalīties <img src={blueskySvg} alt="Bluesky" width={16} />
      </div>
    </OkButton>
  );
};

export default ShareButton;
