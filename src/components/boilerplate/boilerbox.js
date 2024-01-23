import Image from 'next/image';
import styles from './boilerbox.module.css';
import Link from 'next/link';

const BoilerBox = async () => {

    return  <div className={styles.boilerbox}>
    <Image src={'/square_logo.png'} alt="MCDM Logo" width={232} height={195} />
    <div>
      <h1>React / NextJS</h1>
      <p>Medieskolerne Viborg</p>

    </div>
  </div>

}

export default BoilerBox;