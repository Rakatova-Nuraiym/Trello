export interface Trello {
  name: string;
  values: [
    {
      title: string;
      _id: number;
      newComment: [
        {
          comment: string;
          _id: number;
        }
      ];
    }
  ];

  _id: number;
}

export interface todo {
  todo: Trello[];
}
//              patch
export interface TypePatch {
  name: string;
  values: TypePatchArray[];
}

export interface TypePatchArray {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map(arg0: (el: any) => any): unknown;
  title: string;
  _id: number;
  newComment: TypePutValues[];
}

//              path

export interface TypePutValues {
  title: string;
  _id: number;
}
