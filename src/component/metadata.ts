import { CSSProperties } from 'react';

export const MuscleType = {
  CHEST_LEFT: 'chest-left',
  CHEST_RIGHT: 'chest-right',
  TRAPEZIUS_LEFT: 'trapezius-left',
  TRAPEZIUS_RIGHT: 'trapezius-right',
  UPPER_BACK_LEFT: 'upper-back-left',
  UPPER_BACK_RIGHT: 'upper-back-right',
  LOWER_BACK_LEFT: 'lower-back-left',
  LOWER_BACK_RIGHT: 'lower-back-right',
  BICEPS_LEFT: 'biceps-left',
  BICEPS_RIGHT: 'biceps-right',
  TRICEPS_LEFT: 'triceps-left',
  TRICEPS_RIGHT: 'triceps-right',
  FOREARM_LEFT_LEFT: 'forearm-left-left',
  FOREARM_LEFT_RIGHT: 'forearm-left-right',
  FOREARM_RIGHT_LEFT: 'forearm-right-left',
  FOREARM_RIGHT_RIGHT: 'forearm-right-right',
  BACK_DELTOIDS_LEFT: 'back-deltoids-left',
  BACK_DELTOIDS_RIGHT: 'back-deltoids-right',
  FRONT_DELTOIDS_LEFT: 'front-deltoids-left',
  FRONT_DELTOIDS_RIGHT: 'front-deltoids-right',
  ABS_LEFT: 'abs-left',
  ABS_RIGHT: 'abs-right',
  OBLIQUES_LEFT: 'obliques-left',
  OBLIQUES_RIGHT: 'obliques-right',
  ABDUCTOR_LEFT: 'abductor-left',
  ABDUCTOR_RIGHT: 'abductor-right',
  HAMSTRING_LEFT: 'hamstring-left',
  HAMSTRING_RIGHT: 'hamstring-right',
  QUADRICEPS_LEFT_LEFT: 'quadriceps-left-left',
  QUADRICEPS_LEFT_MIDDLE: 'quadriceps-left-middle',
  QUADRICEPS_LEFT_RIGHT: 'quadriceps-left-right',
  QUADRICEPS_RIGHT_LEFT: 'quadriceps-right-left',
  QUADRICEPS_RIGHT_MIDDLE: 'quadriceps-right-middle',
  QUADRICEPS_RIGHT_RIGHT: 'quadriceps-right-right',
  CALVES_LEFT_LEFT: 'calves-left-left',
  CALVES_LEFT_RIGHT: 'calves-left-right',
  CALVES_RIGHT_LEFT: 'calves-right-left',
  CALVES_RIGHT_RIGHT: 'calves-right-right',
  GLUTEAL_LEFT: 'gluteal-left',
  GLUTEAL_RIGHT: 'gluteal-right',
  HEAD: 'head',
  NECK_LEFT: 'neck-left',
  NECK_RIGHT: 'neck-right',
  KNEES_LEFT: 'knees-left',
  KNEES_RIGHT: 'knees-right',
  LEFT_SOLEUS: 'left-soleus',
  RIGHT_SOLEUS: 'right-soleus',
  TRICEPS_LEFT_LEFT: 'triceps-left-left',
  TRICEPS_LEFT_RIGHT: 'triceps-left-right',
  TRICEPS_RIGHT_LEFT: 'triceps-right-left',
  TRICEPS_RIGHT_RIGHT: 'triceps-right-right',
  HAMSTRING_LEFT_LEFT: 'hamstring-left-left',
  HAMSTRING_LEFT_RIGHT: 'hamstring-left-right',
  HAMSTRING_RIGHT_LEFT: 'hamstring-right-left',
  HAMSTRING_RIGHT_RIGHT: 'hamstring-right-right',
} as const;

export type Muscle = typeof MuscleType[keyof typeof MuscleType];

export const ModelType = {
  POSTERIOR: 'posterior',
  ANTERIOR: 'anterior',
} as const;

type ModelType = typeof ModelType[keyof typeof ModelType];

export interface IExerciseData {
  name: string;
  muscles: Muscle[];
  frequency?: number;
}

export interface IMuscleData {
  exercises: string[];
  frequency: number;
}

export interface IMuscleStats {
  muscle: Muscle;
  data: IMuscleData;
}

export interface IModelProps {
  bodyColor?: string;
  data?: Partial<Record<Muscle, { level: number }>>;
  highlightedColors?: string[];
  onClick?: ((exercise: Partial<Record<Muscle, { level: number }>>) => void) | (() => void);
  style?: CSSProperties;
  svgStyle?: CSSProperties;
  type?: ModelType;
  children?: React.ReactNode;
}
