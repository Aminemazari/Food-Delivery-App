import { Button } from "react-native-paper";

interface Props {
  text: string;
  onPress?: () => void;
}
export default function primaryButton({ text,onPress }: Props){
  return (
     <Button 
            mode="contained" 
         style={{ width: 300,height:50,borderRadius:10 ,justifyContent:"center"}}
            onPress={onPress}
          >
          {text}
      </Button>
    );
}