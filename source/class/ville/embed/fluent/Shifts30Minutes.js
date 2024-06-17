/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Shifts30Minutes",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-3 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V10a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V10Zm-1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.05-3.58c-.18.3-.3.77-.3 1.33s.12 1.03.3 1.33c.17.28.4.42.7.42.3 0 .53-.14.7-.42.18-.3.3-.77.3-1.33a2.6 2.6 0 0 0-.3-1.33c-.17-.28-.4-.42-.7-.42-.3 0-.53.14-.7.42Zm-.85-.52c.33-.53.85-.9 1.55-.9.7 0 1.22.37 1.55.9.32.5.45 1.17.45 1.85 0 .68-.13 1.34-.45 1.85-.33.53-.85.9-1.55.9-.7 0-1.22-.37-1.55-.9a3.58 3.58 0 0 1-.45-1.85c0-.68.13-1.34.45-1.85Zm-4.14.5c.46-.36.83-.43 1.08-.4.25.05.44.2.54.37.1.17.09.35 0 .48-.08.14-.32.35-.9.4a.5.5 0 0 0 0 1c.6.05.82.25.9.37.09.13.1.31 0 .5-.1.18-.3.33-.55.37-.25.04-.61-.02-1.07-.38a.5.5 0 1 0-.62.78c.62.5 1.26.68 1.85.6.57-.1 1.02-.45 1.26-.9a1.47 1.47 0 0 0-.33-1.85 1.47 1.47 0 0 0 .33-1.86c-.24-.44-.7-.78-1.27-.86a2.4 2.4 0 0 0-1.84.6.5.5 0 0 0 .62.78Z",
    FILLED : "M10 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM8 8a2 2 0 0 0-2 2v.5c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5V10a2 2 0 0 0-2-2H8Zm-2.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.05-3.58c-.18.3-.3.77-.3 1.33s.12 1.03.3 1.33c.17.28.4.42.7.42.3 0 .53-.14.7-.42.18-.3.3-.77.3-1.33a2.6 2.6 0 0 0-.3-1.33c-.17-.28-.4-.42-.7-.42-.3 0-.53.14-.7.42Zm-.85-.52c.33-.53.85-.9 1.55-.9.7 0 1.22.37 1.55.9.32.5.45 1.17.45 1.85 0 .68-.13 1.34-.45 1.85-.33.53-.85.9-1.55.9-.7 0-1.22-.37-1.55-.9a3.58 3.58 0 0 1-.45-1.85c0-.68.13-1.34.45-1.85Zm-4.14.5c.46-.36.83-.43 1.08-.4.25.05.44.2.54.37.1.17.09.35 0 .48-.08.14-.32.35-.9.4a.5.5 0 0 0 0 1c.6.05.82.25.9.37.09.13.1.31 0 .5-.1.18-.3.33-.55.37-.25.04-.61-.02-1.07-.38a.5.5 0 1 0-.62.78c.62.5 1.26.68 1.85.6.57-.1 1.02-.45 1.26-.9a1.47 1.47 0 0 0-.33-1.85 1.47 1.47 0 0 0 .33-1.86c-.24-.44-.7-.78-1.27-.86a2.4 2.4 0 0 0-1.84.6.5.5 0 0 0 .62.78Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});