interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Smart Editing',
    description: 'AI-powered tools for seamless video editing'
  },
  {
    title: 'Auto Enhancement',
    description: 'Automatic color correction and quality improvement'
  },
  {
    title: 'Quick Export',
    description: 'Fast rendering and multiple format support'
  }
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
      {features.map((feature) => (
        <div key={feature.title} className="p-4 rounded-lg bg-white shadow-sm">
          <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
          <p className="text-gray-600 mt-2">{feature.description}</p>
        </div>
      ))}
    </div>
  );
} 