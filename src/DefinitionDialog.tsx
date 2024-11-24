import styled from 'styled-components';
import ShareButton from './ShareButton';

const Dialog = styled.dialog`
  border: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 60px;
`;

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Definition = styled.div`
  margin: 10px 0;
`;

const OrderedList = styled.ol``;

export const OkButton = styled.button`
  background-color: #222222;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
`;

export default function DefinitionDialog({
  showDefinition,
  setShowDefinition,
  word,
  definition,
}: {
  showDefinition: boolean;
  setShowDefinition: (value: boolean) => void;
  word: string;
  definition: string[];
}) {
  const postText = `Nupat atradu "${word}" Latviešu Scrabble vārdu meklētājā: https://peterispzld.github.io/burtu-juceklis/`;
  const encodedPostText = encodeURIComponent(postText);
  const threadsShareUrl = `https://www.threads.net/intent/post?text=${encodedPostText}`;

  const handleShareClick = () => {
    window.open(threadsShareUrl, '_blank', 'noopener,noreferrer');
    setShowDefinition(false);
  };

  return (
    <Dialog open={showDefinition} onClick={() => setShowDefinition(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2>{word}</h2>
        <p>
          Skatīt{' '}
          <a
            href={`https://tezaurs.lv/${word}`}
            target="_blank"
            style={{ color: '#a4343a' }}
          >
            tezaurs.lv
          </a>
        </p>
        <Definition>
          <OrderedList>
            {definition.map((sense, i) => {
              if (sense.toString().includes('Object')) {
                return <li key={i}>{(sense[0] as any).ref[0]._}</li>;
              }
              return <li key={i}>{sense.toString()}</li>;
            })}
          </OrderedList>
          <br />
          <br />
        </Definition>
        <form method="dialog">
          <ShareButton handleShareClick={handleShareClick} />
          <OkButton
            onClick={() => setShowDefinition(false)}
            style={{ float: 'right' }}
          >
            OK
          </OkButton>
        </form>
      </Modal>
    </Dialog>
  );
}
