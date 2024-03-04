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

export interface NewDataProps {
  name: string;

  values: [];
}
