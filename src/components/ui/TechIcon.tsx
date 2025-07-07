import React from 'react';

interface TechIconProps {
  techName: string;
  size?: number;
  className?: string;
}

// Mapping from technology names to logo file paths
const techLogoMap: Record<string, string> = {
  // Data Science & AI
  'Python': '/images/logo/python-icon.svg',
  'TensorFlow': '/images/logo/tensorflow-icon.svg',
  'PyTorch': '/images/logo/pytorch-icon.svg',
  'Ultralytics': '/images/logo/Ultralytics_Logomark_Original.svg',
  'Matplotlib': '/images/logo/Matplotlib.svg',
  'Pandas': '/images/logo/Pandas.svg',
  'Numpy': '/images/logo/NumPy.svg',
  'NumPy': '/images/logo/NumPy.svg',
  'Seaborn': '/images/logo/seaborn-1.svg',
  'SkLearn': '/images/logo/scikit-learn.svg',
  'scikit-learn': '/images/logo/scikit-learn.svg',
  'Spark': '/images/logo/apache_spark-icon.svg',
  'Apache Spark': '/images/logo/apache_spark-icon.svg',
  'Kafka': '/images/logo/apache_kafka-icon.svg',
  'Apache Kafka': '/images/logo/apache_kafka-icon.svg',
  'NiFi': '/images/logo/apache_nifi-icon.svg',
  'Apache NiFi': '/images/logo/apache_nifi-icon.svg',
  'Igraph': '/images/logo/igraph_logo_white.svg',
  'HuggingFace': '/images/logo/huggingface-2.svg',
  'Hugging Face': '/images/logo/huggingface-2.svg',
  
  // Cloud & Infrastructure
  'Google Cloud': '/images/logo/google_cloud-icon.svg',
  'Azure': '/images/logo/microsoft_azure-icon.svg',
  'Microsoft Azure': '/images/logo/microsoft_azure-icon.svg',
  'Docker': '/images/logo/docker-icon.svg',
  
  // Web Development
  'React': '/images/logo/reactjs-icon.svg',
  'React JS': '/images/logo/reactjs-icon.svg',
  'TypeScript': '/images/logo/typescriptlang-icon.svg',
  'JavaScript': '/images/logo/javascript-icon.svg',
  'HTML5': '/images/logo/w3_html5-icon.svg',
  'CSS': '/images/logo/w3_css-icon~old.svg',
  'Tailwind CSS': '/images/logo/tailwindcss-icon.svg',
  'Tailwind': '/images/logo/tailwindcss-icon.svg',
  
  // Databases
  'MySQL': '/images/logo/mysql-icon.svg',
  'MongoDB': '/images/logo/mongodb-ar21~bgwhite.svg',
  
  // Version Control
  'Git': '/images/logo/git-scm-icon.svg',
  
  // CMS
  'Contentful': '/images/logo/contentful-icon.svg'
};

export const TechIcon: React.FC<TechIconProps> = ({ 
  techName, 
  size = 12, 
  className = "" 
}) => {
  const logoPath = techLogoMap[techName];
  
  // If no logo found, return a fallback
  if (!logoPath) {
    return (
      <div 
        className={`bg-[#F5F5F7] rounded-full flex items-center justify-center ${className}`}
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      >
        <span 
          className="text-[#050505] font-nunito font-semibold"
          style={{ fontSize: Math.max(8, size * 0.3), lineHeight: 1 }}
        >
          {techName.slice(0, 2).toUpperCase()}
        </span>
      </div>
    );
  }
  
  return (
    <div 
      className={`flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <img 
        src={logoPath} 
        alt={techName}
        className="w-full h-full object-contain"
        title={techName}
        style={{ display: 'block' }}
      />
    </div>
  );
};