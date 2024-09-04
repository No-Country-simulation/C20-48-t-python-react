import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
    <div style={{left: 41, top: 113, position: 'absolute', color: '#1E1E1E', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 28.80, wordWrap: 'break-word'}}>Editar perfil</div>
    <div style={{width: 136, height: 136, left: 147, top: 158, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
    <div style={{width: 136, padding: 12, left: 147, top: 310, position: 'absolute', background: '#2C2C2C', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div style={{color: '#F5F5F5', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Cambiar perfil</div>
    </div>
    <div style={{height: 260, left: 41, top: 366, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 70, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', color: '#1E1E1E', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'}}>Nombre de usuario</div>
            <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', color: '#B3B3B3', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>usuario</div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 118, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', color: '#1E1E1E', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 22.40, wordWrap: 'break-word'}}>Cambiar contraseña</div>
            <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', color: '#B3B3B3', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Antigua contraseña</div>
            </div>
            <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #D9D9D9 solid', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{flex: '1 1 0', color: '#B3B3B3', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Nueva contraseña</div>
            </div>
        </div>
        <div style={{width: 348, padding: 12, background: '#2C2C2C', borderRadius: 8, overflow: 'hidden', border: '1px #2C2C2C solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div style={{color: '#F5F5F5', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Guardar cambios</div>
        </div>
    </div>
    <div style={{width: 430, height: 89, left: 0, top: 0, position: 'absolute', background: '#313131'}} />
    <div style={{paddingLeft: 71, left: 37, top: 41, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', gap: 31, display: 'inline-flex'}}>
        <div style={{width: 214, textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>Delicias del Mundo</div>
        <div style={{width: 40, height: 40, position: 'relative'}}>
            <div style={{width: 40, height: 40, left: 0, top: 0, position: 'absolute', background: '#D9D9D9'}} />
            <div style={{width: 19.62, height: 33.33, left: 10, top: 3.33, position: 'absolute', background: 'white'}}></div>
        </div>
    </div>
    <div style={{width: 352.42, height: 12.87, left: 39, top: 12.13, position: 'absolute'}}>
        <img style={{width: 24.33, height: 11.33, left: 328.09, top: 0.20, position: 'absolute', opacity: 0.35}} src="https://via.placeholder.com/24x11" />
        <img style={{width: 348.09, height: 12.87, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/348x13" />
    </div>
</div>
    </>
  );
}

export default Profile;
