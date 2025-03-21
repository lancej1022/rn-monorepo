import { ChevronDown } from 'lucide-react-native';
import { iconWithClassName, LucidePropsWithClassName } from './iconWithClassName';
import { FunctionComponent } from 'react';
iconWithClassName(ChevronDown);
// TODO: need to just add this everywhere until I can figure out why tf `className` isnt being picked up by TS after adding the other package
const ChevronDownAlias = ChevronDown as FunctionComponent<LucidePropsWithClassName>;
export { ChevronDownAlias as ChevronDown };
