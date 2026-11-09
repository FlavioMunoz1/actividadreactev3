import { useState } from 'react';
import { Shield, Terminal, Users, Key, FileCheck, Building, Menu, X, Info, ChevronRight } from 'lucide-react';

const IntroContent = () => (
  <div className="page-content">
    <h1 className="page-title"><Shield className="icon-large text-blue" /> Wiki de Seguridad en Azure</h1>
    <p className="lead-text">
      Bienvenido a la base de conocimiento interactiva sobre la seguridad en Microsoft Azure. 
      La seguridad en la nube es un modelo de responsabilidad compartida, y Azure proporciona 
      un conjunto robusto de herramientas y servicios para proteger tus aplicaciones y datos.
    </p>
    <div className="info-box">
      <h3><Info className="icon-medium" /> ¿Por dónde empezar?</h3>
      <p>
        Utiliza el menú lateral para explorar los conceptos fundamentales de seguridad, desde la administración
        básica con Azure CLI hasta marcos de cumplimiento avanzados como NIST SP 800-53 y el 
        Microsoft Azure Well-Architected Framework.
      </p>
    </div>
  </div>
);

const CliContent = () => (
  <div className="page-content">
    <h2 className="section-title"><Terminal className="icon-medium text-blue" /> Administración Segura mediante Azure CLI</h2>
    <p className="lead-text">
      La Interfaz de Línea de Comandos (CLI) de Azure es una herramienta potente, pero debe usarse de manera segura para evitar 
      la exposición de credenciales o la escalada de privilegios no autorizada.
    </p>
    
    <h3 className="subsection-title">Mejores Prácticas</h3>
    <ul className="custom-list">
      <li><strong>Evitar contraseñas en texto plano:</strong> Nunca incluyas contraseñas directamente en tus scripts.</li>
      <li><strong>Identidades Administradas:</strong> Utiliza identidades administradas cuando ejecutes scripts desde recursos de Azure.</li>
      <li><strong>Azure Cloud Shell:</strong> Prefiere usar Cloud Shell, ya que es un entorno preautenticado y efímero.</li>
    </ul>

    <div className="code-block">
      <div className="code-comment"># Inicio de sesión interactivo seguro (recomendado para usuarios)</div>
      <div>az login</div>
      <br/>
      <div className="code-comment"># Inicio de sesión usando una Managed Identity en una VM de Azure</div>
      <div>az login --identity</div>
    </div>
  </div>
);

const RbacContent = () => (
  <div className="page-content">
    <h2 className="section-title"><Users className="icon-medium text-blue" /> Control de Acceso Basado en Roles (RBAC)</h2>
    <p className="lead-text">
      Azure RBAC es un sistema que proporciona una administración de acceso detallada a los recursos de Azure. 
      Ayuda a garantizar que los usuarios tengan los permisos exactos que necesitan.
    </p>

    <div className="grid-2-cols">
      <div className="card">
        <h4>Principio de Menor Privilegio</h4>
        <p>Otorga a los usuarios solo los derechos de acceso que necesitan para su rol. Si un usuario solo necesita leer métricas, no debe tener permisos de escritura.</p>
      </div>
      <div className="card">
        <h4>Ámbitos (Scopes)</h4>
        <p>Los roles pueden asignarse en diferentes niveles: Grupo de administración, Suscripción, Grupo de recursos, o un Recurso específico. La herencia fluye hacia abajo.</p>
      </div>
    </div>

    <h3 className="subsection-title">Roles Integrados Comunes</h3>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Rol</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Propietario (Owner)</strong></td>
            <td>Acceso total a todos los recursos y la capacidad de delegar el acceso a otros.</td>
          </tr>
          <tr>
            <td><strong>Colaborador (Contributor)</strong></td>
            <td>Puede crear y administrar todos los tipos de recursos de Azure, pero no puede otorgar acceso a otros.</td>
          </tr>
          <tr>
            <td><strong>Lector (Reader)</strong></td>
            <td>Puede ver los recursos existentes, pero no puede realizar cambios.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const MfaContent = () => (
  <div className="page-content">
    <h2 className="section-title"><Key className="icon-medium text-blue" /> Autenticación Multifactor (MFA)</h2>
    <p className="lead-text">
      MFA requiere que los usuarios proporcionen formas adicionales de identificación antes de poder acceder a los servicios. 
      En Microsoft Entra ID, esto bloquea el 99.9% de los ataques de compromiso de cuentas.
    </p>

    <div className="card highlight-card">
      <h4>Métodos de Autenticación</h4>
      <ul className="feature-list">
        <li><ChevronRight className="icon-small text-blue" /> Microsoft Authenticator App (Recomendado)</li>
        <li><ChevronRight className="icon-small text-blue" /> Llaves de seguridad FIDO2 (Phishing-resistant)</li>
        <li><ChevronRight className="icon-small text-blue" /> Windows Hello for Business</li>
        <li className="text-muted"><ChevronRight className="icon-small" /> SMS / Llamadas (Menos seguro)</li>
      </ul>
    </div>

    <h3 className="subsection-title">Políticas de Acceso Condicional</h3>
    <p>
      En lugar de requerir MFA cada vez, el <strong>Acceso Condicional</strong> analiza señales (ubicación, dispositivo, riesgo en tiempo real) 
      para tomar decisiones de acceso. Puedes configurar reglas como: <em>"Requerir MFA solo si el usuario se conecta desde una IP fuera de la red corporativa".</em>
    </p>
  </div>
);

const NistContent = () => (
  <div className="page-content">
    <h2 className="section-title"><FileCheck className="icon-medium text-blue" /> Cumplimiento NIST SP 800-53</h2>
    <p className="lead-text">
      El marco NIST SP 800-53 establece controles de seguridad y privacidad para sistemas de información. Azure proporciona herramientas integradas para facilitar su cumplimiento.
    </p>

    <div className="card graphic-card">
      <FileCheck className="bg-icon" />
      <h4>Azure Policy & Microsoft Defender for Cloud</h4>
      <p>Microsoft proporciona una iniciativa de <strong>Azure Policy</strong> predefinida (Blueprint) llamada <em>"NIST SP 800-53 Rev. 5"</em>.</p>
      <ul className="custom-list">
        <li>Audita continuamente los recursos para detectar desviaciones.</li>
        <li>Genera paneles de cumplimiento normativo (Regulatory Compliance Dashboard).</li>
        <li>Asigna automáticamente controles técnicos a las familias de controles de NIST (AC, AU, SC, etc.).</li>
      </ul>
    </div>
  </div>
);

const WafContent = () => (
  <div className="page-content">
    <h2 className="section-title"><Building className="icon-medium text-blue" /> Well-Architected Framework: Seguridad</h2>
    <p className="lead-text">
      El Pilar de Seguridad garantiza la protección de los datos y sistemas contra amenazas para mantener la confidencialidad, integridad y disponibilidad.
    </p>

    <h3 className="subsection-title">Principios Clave del Pilar de Seguridad</h3>
    
    <div className="grid-3-cols">
      <div className="card interactive-card">
        <h4>Defensa en Profundidad</h4>
        <p>Capas de seguridad redundantes. Si falla un control (ej. firewall de red), otro control protege la carga de trabajo.</p>
      </div>
      
      <div className="card interactive-card">
        <h4>Confianza Cero (Zero Trust)</h4>
        <p>Nunca confíes, siempre verifica. Asume la brecha de seguridad y verifica explícitamente cada solicitud de acceso.</p>
      </div>

      <div className="card interactive-card">
        <h4>Seguridad por Diseño</h4>
        <p>Integrar la seguridad en todo el ciclo de vida del desarrollo (DevSecOps) y no como un parche final (Shift-Left).</p>
      </div>
    </div>
  </div>
);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      <aside className={`sidebar ${isMobileMenuOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-icon">
            <Shield />
          </div>
          <div className="logo-text">
            <h1>Azure SecWiki</h1>
            <span>Guía de Referencia</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
              >
                <Icon className="nav-icon" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          &copy; {new Date().getFullYear()} Azure Security Guide
        </div>
      </aside>

      <main className="main-content">
        <div className="content-wrapper">
          <ActiveComponent />
        </div>
      </main>

      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}