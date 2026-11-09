import React, { useState } from 'react';
import { 
  Shield, 
  Terminal, 
  Users, 
  Key, 
  FileCheck, 
  Building, 
  Menu, 
  X, 
  ChevronRight,
  Info
} from 'lucide-react';

// --- Contenido de las páginas de la Wiki ---

const IntroContent = () => (
  <div className="space-y-6 animate-fade-in">
    <h1 className="text-4xl font-extrabold text-white mb-4 flex items-center gap-3">
      <Shield className="w-10 h-10 text-blue-500" />
      Wiki de Seguridad en Azure
    </h1>
    <p className="text-lg text-slate-300 leading-relaxed">
      Bienvenido a la base de conocimiento interactiva sobre la seguridad en Microsoft Azure. 
      La seguridad en la nube es un modelo de responsabilidad compartida, y Azure proporciona 
      un conjunto robusto de herramientas y servicios para proteger tus aplicaciones y datos.
    </p>
    <div className="bg-blue-900/30 border border-blue-700 p-6 rounded-xl mt-8">
      <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
        <Info className="w-6 h-6" />
        ¿Por dónde empezar?
      </h3>
      <p className="text-slate-300">
        Utiliza el menú lateral para explorar los conceptos fundamentales de seguridad, desde la administración
        básica con Azure CLI hasta marcos de cumplimiento avanzados como NIST SP 800-53 y el 
        Microsoft Azure Well-Architected Framework.
      </p>
    </div>
  </div>
);

const CliContent = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-3">
      <Terminal className="w-8 h-8 text-blue-400" />
      Administración Segura mediante Azure CLI
    </h2>
    <p className="text-slate-300 leading-relaxed">
      La Interfaz de Línea de Comandos (CLI) de Azure es una herramienta potente, pero debe usarse de manera segura para evitar 
      la exposición de credenciales o la escalada de privilegios no autorizada.
    </p>
    
    <h3 className="text-xl font-semibold text-blue-300 mt-6">Mejores Prácticas</h3>
    <ul className="list-disc list-inside space-y-3 text-slate-300 ml-4">
      <li><strong>Evitar contraseñas en texto plano:</strong> Nunca incluyas contraseñas directamente en tus scripts bash o powershell.</li>
      <li><strong>Identidades Administradas (Managed Identities):</strong> Utiliza identidades administradas cuando ejecutes scripts desde recursos de Azure (como VMs o Azure Functions) para evitar manejar credenciales.</li>
      <li><strong>Azure Cloud Shell:</strong> Prefiere usar Cloud Shell, ya que es un entorno preautenticado y efímero, reduciendo la superficie de ataque local.</li>
    </ul>

    <div className="bg-slate-950 p-4 rounded-lg mt-6 font-mono text-sm border border-slate-800 shadow-inner text-green-400">
      <div className="text-slate-500 mb-2"># Inicio de sesión interactivo seguro (recomendado para usuarios)</div>
      <div>az login</div>
      <br/>
      <div className="text-slate-500 mb-2"># Inicio de sesión usando una Managed Identity en una VM de Azure</div>
      <div>az login --identity</div>
    </div>
  </div>
);

const RbacContent = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-3">
      <Users className="w-8 h-8 text-blue-400" />
      Control de Acceso Basado en Roles (RBAC)
    </h2>
    <p className="text-slate-300 leading-relaxed">
      Azure RBAC (Role-Based Access Control) es un sistema que proporciona una administración de acceso detallada a los recursos de Azure. 
      Ayuda a garantizar que los usuarios tengan los permisos exactos que necesitan para realizar su trabajo.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <h4 className="text-lg font-bold text-white mb-2">Principio de Menor Privilegio</h4>
        <p className="text-sm text-slate-400">
          Otorga a los usuarios solo los derechos de acceso que necesitan para su rol. Si un usuario solo necesita leer métricas, no debe tener permisos de escritura sobre la base de datos.
        </p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <h4 className="text-lg font-bold text-white mb-2">Ámbitos (Scopes)</h4>
        <p className="text-sm text-slate-400">
          Los roles pueden asignarse en diferentes niveles: Grupo de administración, Suscripción, Grupo de recursos, o un Recurso específico. La herencia fluye hacia abajo.
        </p>
      </div>
    </div>

    <h3 className="text-xl font-semibold text-blue-300 mt-8">Roles Integrados Comunes</h3>
    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
      <table className="w-full text-left text-sm text-slate-300">
        <thead className="bg-slate-950 text-slate-400 uppercase">
          <tr>
            <th className="px-6 py-3">Rol</th>
            <th className="px-6 py-3">Descripción</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700">
          <tr>
            <td className="px-6 py-4 font-medium text-white">Propietario (Owner)</td>
            <td className="px-6 py-4">Acceso total a todos los recursos y la capacidad de delegar el acceso a otros.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium text-white">Colaborador (Contributor)</td>
            <td className="px-6 py-4">Puede crear y administrar todos los tipos de recursos de Azure, pero no puede otorgar acceso a otros.</td>
          </tr>
          <tr>
            <td className="px-6 py-4 font-medium text-white">Lector (Reader)</td>
            <td className="px-6 py-4">Puede ver los recursos existentes, pero no puede realizar cambios.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const MfaContent = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-3">
      <Key className="w-8 h-8 text-blue-400" />
      Autenticación Multifactor (MFA)
    </h2>
    <p className="text-slate-300 leading-relaxed">
      MFA requiere que los usuarios proporcionen formas adicionales de identificación antes de poder acceder a los servicios. 
      En Microsoft Entra ID (anteriormente Azure AD), esto bloquea el 99.9% de los ataques de compromiso de cuentas.
    </p>

    <div className="flex flex-col md:flex-row gap-6 mt-6">
      <div className="flex-1 bg-gradient-to-br from-blue-900 to-slate-900 p-6 rounded-xl border border-blue-800 shadow-lg">
        <h4 className="text-xl font-bold text-white mb-3">Métodos de Autenticación</h4>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-blue-400" /> Microsoft Authenticator App (Recomendado)
          </li>
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-blue-400" /> Llaves de seguridad FIDO2 (Phishing-resistant)
          </li>
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-blue-400" /> Windows Hello for Business
          </li>
          <li className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-slate-500" /> SMS / Llamadas (Menos seguro)
          </li>
        </ul>
      </div>
    </div>

    <h3 className="text-xl font-semibold text-blue-300 mt-8">Políticas de Acceso Condicional</h3>
    <p className="text-slate-300">
      En lugar de requerir MFA cada vez, el <strong>Acceso Condicional</strong> analiza señales (ubicación, dispositivo, riesgo en tiempo real) 
      para tomar decisiones de acceso. Puedes configurar reglas como: <em>"Requerir MFA solo si el usuario se conecta desde una IP fuera de la red corporativa o si hay riesgo de inicio de sesión".</em>
    </p>
  </div>
);

const NistContent = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-3">
      <FileCheck className="w-8 h-8 text-blue-400" />
      Cumplimiento NIST SP 800-53
    </h2>
    <p className="text-slate-300 leading-relaxed">
      El marco NIST (Instituto Nacional de Estándares y Tecnología) SP 800-53 establece controles de seguridad y privacidad para 
      sistemas de información federales en EE. UU., siendo un estándar de oro global. Azure proporciona herramientas integradas para facilitar su cumplimiento.
    </p>

    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mt-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <FileCheck className="w-32 h-32" />
      </div>
      <h4 className="text-xl font-bold text-white mb-2 relative z-10">Azure Policy & Microsoft Defender for Cloud</h4>
      <p className="text-sm text-slate-300 mb-4 relative z-10">
        Microsoft proporciona una iniciativa de <strong>Azure Policy</strong> predefinida (Blueprint) llamada <em>"NIST SP 800-53 Rev. 5"</em>.
      </p>
      <ul className="list-disc list-inside text-slate-400 space-y-2 relative z-10">
        <li>Audita continuamente los recursos para detectar desviaciones.</li>
        <li>Genera paneles de cumplimiento normativo (Regulatory Compliance Dashboard).</li>
        <li>Asigna automáticamente controles técnicos a las familias de controles de NIST (AC, AU, SC, etc.).</li>
      </ul>
    </div>
  </div>
);

const WafContent = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-3">
      <Building className="w-8 h-8 text-blue-400" />
      Well-Architected Framework: Seguridad
    </h2>
    <p className="text-slate-300 leading-relaxed">
      El Microsoft Azure Well-Architected Framework consta de cinco pilares de excelencia arquitectónica. 
      El <strong>Pilar de Seguridad</strong> garantiza la protección de los datos y sistemas contra amenazas para mantener la confidencialidad, integridad y disponibilidad.
    </p>

    <h3 className="text-xl font-semibold text-blue-300 mt-8">Principios Clave del Pilar de Seguridad</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div className="bg-slate-900 p-5 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
        <h4 className="text-white font-bold mb-2">Defensa en Profundidad</h4>
        <p className="text-sm text-slate-400">Capas de seguridad redundantes. Si falla un control (ej. firewall de red), otro control (ej. autenticación) protege la carga de trabajo.</p>
      </div>
      
      <div className="bg-slate-900 p-5 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
        <h4 className="text-white font-bold mb-2">Confianza Cero (Zero Trust)</h4>
        <p className="text-sm text-slate-400">Nunca confíes, siempre verifica. Asume la brecha de seguridad y verifica explícitamente cada solicitud de acceso.</p>
      </div>

      <div className="bg-slate-900 p-5 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors">
        <h4 className="text-white font-bold mb-2">Seguridad por Diseño</h4>
        <p className="text-sm text-slate-400">Integrar la seguridad en todo el ciclo de vida del desarrollo (DevSecOps) y no como un parche final (Shift-Left).</p>
      </div>
    </div>
  </div>
);


// --- Aplicación Principal ---

export default function AzureSecurityWiki() {
  const [activeTab, setActiveTab] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'intro', label: 'Inicio', icon: Shield, component: IntroContent },
    { id: 'cli', label: 'Azure CLI Seguro', icon: Terminal, component: CliContent },
    { id: 'rbac', label: 'Control de Acceso (RBAC)', icon: Users, component: RbacContent },
    { id: 'mfa', label: 'Autenticación (MFA)', icon: Key, component: MfaContent },
    { id: 'nist', label: 'Cumplimiento NIST', icon: FileCheck, component: NistContent },
    { id: 'waf', label: 'Well-Architected (Seguridad)', icon: Building, component: WafContent },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || IntroContent;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false); // Cerrar menú en móviles al seleccionar
  };

  return (
    <div className="flex h-screen bg-slate-950 font-sans text-slate-200 overflow-hidden selection:bg-blue-500/30">
      
      {/* Botón de Menú Móvil */}
      <button 
        className="md:hidden absolute top-4 left-4 z-50 p-2 bg-slate-800 rounded-md text-white hover:bg-slate-700 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Panel Lateral (Sidebar) */}
      <aside 
        className={`
          absolute md:static top-0 left-0 h-full w-72 bg-slate-900 border-r border-slate-800 z-40
          transform transition-transform duration-300 ease-in-out flex flex-col
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Azure SecWiki</h1>
            <p className="text-xs text-blue-400 font-medium">Guía de Referencia</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-sm' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                `}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Azure Security Guide
        </div>
      </aside>

      {/* Área Principal de Contenido */}
      <main className="flex-1 h-full overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 md:p-12 p-6 pt-16 md:pt-12">
        <div className="max-w-4xl mx-auto">
          <ActiveComponent />
        </div>
      </main>

      {/* Overlay para móviles */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Estilos para animaciones CSS custom si no usa plugins extra */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
}