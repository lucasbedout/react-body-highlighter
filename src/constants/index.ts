import { ModelType, Muscle } from '../component/metadata';

export const DEFAULT_ANTERIOR_MUSCLE_DATA: Partial<Record<Muscle, { level: number }>> = {
  'chest-left': { level: 0 },
  'chest-right': { level: 0 },
  'biceps-left': { level: 0 },
  'biceps-right': { level: 0 },
  'triceps-left': { level: 0 },
  'triceps-right': { level: 0 },
  'forearm-left-left': { level: 0 },
  'forearm-left-right': { level: 0 },
  'forearm-right-left': { level: 0 },
  'forearm-right-right': { level: 0 },
  'front-deltoids-left': { level: 0 },
  'front-deltoids-right': { level: 0 },
  'abs-left': { level: 0 },
  'abs-right': { level: 0 },
  'obliques-left': { level: 0 },
  'obliques-right': { level: 0 },
  'quadriceps-left-left': { level: 0 },
  'quadriceps-left-middle': { level: 0 },
  'quadriceps-left-right': { level: 0 },
  'quadriceps-right-left': { level: 0 },
  'quadriceps-right-middle': { level: 0 },
  'quadriceps-right-right': { level: 0 },
  'calves-left-left': { level: 0 },
  'calves-left-right': { level: 0 },
  'calves-right-left': { level: 0 },
  'calves-right-right': { level: 0 },
  head: { level: 0 },
  'neck-left': { level: 0 },
  'neck-right': { level: 0 },
  'knees-left': { level: 0 },
  'knees-right': { level: 0 },
};

export const DEFAULT_POSTERIOR_MUSCLE_DATA: Partial<Record<Muscle, { level: number }>> = {
  'trapezius-left': { level: 0 },
  'trapezius-right': { level: 0 },
  'upper-back-left': { level: 0 },
  'upper-back-right': { level: 0 },
  'lower-back-left': { level: 0 },
  'lower-back-right': { level: 0 },
  'back-deltoids-left': { level: 0 },
  'back-deltoids-right': { level: 0 },
  'hamstring-left-left': { level: 0 },
  'hamstring-left-right': { level: 0 },
  'hamstring-right-left': { level: 0 },
  'hamstring-right-right': { level: 0 },
  'gluteal-left': { level: 0 },
  'gluteal-right': { level: 0 },
  'left-soleus': { level: 0 },
  'right-soleus': { level: 0 },
  'triceps-left-left': { level: 0 },
  'triceps-left-right': { level: 0 },
  'triceps-right-left': { level: 0 },
  'triceps-right-right': { level: 0 },
};

export const DEFAULT_BODY_COLOR = '#B6BDC3';
export const DEFAULT_HIGHLIGHTED_COLORS = ['#81b1d9', '#277abf'];

export const DEFAULT_MODEL_TYPE = ModelType.ANTERIOR;
