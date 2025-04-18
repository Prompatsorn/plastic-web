import SceneHome from '@/components/SceneHome';
import SceneWaterIntro from '@/components/SceneWaterIntro';
import SceneQuestion from '@/components/SceneQuestion';
import SceneWall from '@/components/SceneWall';
import SceneBottleTrash from '@/components/SceneBottleTrash';
import SceneSea1 from '@/components/SceneSea1';
import SceneSea2 from '@/components/SceneSea2';
import SceneBeach1 from '@/components/SceneBeach1';
import SceneBeach2 from '@/components/SceneBeach2';
import SceneRecycle1 from '@/components/SceneRecycle1';
import SceneRecycle3 from '@/components/SceneRecycle3';
import SceneRecycle4 from '@/components/SceneRecycle4';
import SceneNewBottle from '@/components/SceneNewBottle';
import SceneSustainability from '@/components/SceneSustainability';
import Scene3R from '@/components/Scene3R'
import SceneEnd from '@/components/SceneEnd'
import SceneEnding from '@/components/SceneEnding'
import SceneProducer from '@/components/SceneProducer'
import SceneReturn from '@/components/SceneReturn'
import SceneFooter from '@/components/SceneFooter'

export default function HomePage() {
  return (
    <main className="w-full">
      <SceneHome />
      <SceneWaterIntro />
      <SceneQuestion />
      <SceneWall />
      <SceneBottleTrash />
      <SceneSea1 />
      <SceneSea2 />
      <SceneBeach1 />
      <SceneBeach2 />
      <SceneRecycle1 />
      <SceneRecycle3 />
      <SceneRecycle4 />
      <SceneNewBottle />
      <SceneSustainability />
      <Scene3R />
      <SceneEnd />
      <SceneEnding />
      <SceneProducer />
      <SceneReturn />
      <SceneFooter />
    </main>
  );
}

