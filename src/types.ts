export interface Word {
  entry: Entry;
  form: Form;
  sense: Sense;
}

interface Sense {
  $: _3;
  def: string[];
}

interface _3 {
  id: string;
  n: string;
}

interface Form {
  $: _;
  orth: Orth[];
  gramGrp: GramGrp2[];
}

interface GramGrp2 {
  iType: IType[];
  gramGrp: GramGrp[];
}

interface GramGrp {
  $: _;
  gram: Orth[];
}

interface IType {
  _: string;
  $: _2;
}

interface _2 {
  type: string;
  corresp: string;
}

interface Orth {
  _: string;
  $: _;
}

interface _ {
  type: string;
}

interface Entry {
  id: string;
  sortKey: string;
  n: string;
  type: string;
}
