import styles from './Container.module.css'
import { ChildrenParams } from '../../../core/ChildrenParams'

export function Container({ children }: ChildrenParams) {
  return <div className={styles.container}>{children}</div>
}
