
export interface PropsTitle {
   className?: string
   title?: string; 
   style?: React.CSSProperties;
}

export interface PropsImage {
   img?:string;
   className?: string;
   style?: React.CSSProperties;
}

export interface PropsButtons{
   handleButton?: (value:number) => void;
   count?: number;
   className?: string;
   style?: React.CSSProperties;
}

export interface ProductInCart extends Product {
   count: number;
}

export interface InitialValues {
   counter?:  number;
   maxCount?: number;
}

export interface Props {
   product: Product;
   // children?: React.ReactElement[] | React.ReactElement;
   children?: ( args:ProductCardHandlers ) => React.ReactElement;
   className?: string; 
   style?: React.CSSProperties;
   onChange?: ( args: onChangeArgs ) => void;
   value?:number;
   initialValues?: InitialValues;
};

export interface Product {
   id:    string;
   title: string;
   img?:  string;
};


export interface useProductArgs {
   product: Product;
   onChange?: ( args: onChangeArgs ) => void;
   value?: number,
   initialValues?: InitialValues
}


export interface onChangeArgs {
   count: number;
   product: Product;
}

export interface ProductContextProps {
   count: number;
   handleButton: (value:number) => void;
   product: Product
   maxCount?: number;
}

export interface ProductCardHOCProps {
   ( value: Props ): JSX.Element;
   Title:( value: PropsTitle ) => JSX.Element;
   Image:( value: PropsImage ) => JSX.Element;
   Buttons:( value: PropsButtons ) => JSX.Element;
}


export interface ProductCardHandlers {
   count: number;
   isMaxCountReached: boolean;
   maxCount?: number;
   product: Product;
   increaseBy: ( value:number ) => void
   reset: () => void;
}