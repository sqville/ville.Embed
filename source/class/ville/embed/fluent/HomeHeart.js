/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HomeHeart",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M9 2.39a1.5 1.5 0 0 1 2 0l5.5 4.94c.32.28.5.69.5 1.12v1.6a3.56 3.56 0 0 0-1-.02V8.45a.5.5 0 0 0-.17-.38l-5.5-4.94a.5.5 0 0 0-.66 0l-5.5 4.94a.5.5 0 0 0-.17.38v7.05c0 .28.22.5.5.5h5.43l.11.11.88.89H4.5A1.5 1.5 0 0 1 3 15.5V8.45c0-.43.18-.84.5-1.12L9 2.39Zm9.25 9.37a2.55 2.55 0 0 0-3.63 0l-.12.12-.12-.12a2.55 2.55 0 0 0-3.84.24 2.6 2.6 0 0 0 .21 3.41l3.43 3.46c.18.17.46.17.64 0l3.43-3.46c1-1 1-2.64 0-3.65Z";
   var pathdfilled = "M11 2.39a1.5 1.5 0 0 0-2 0L3.5 7.33c-.32.28-.5.69-.5 1.12v7.05c0 .83.67 1.5 1.5 1.5h6.42l-.88-.89a3.6 3.6 0 0 1 0-5.06 3.55 3.55 0 0 1 4.46-.48 3.54 3.54 0 0 1 2.5-.53v-1.6c0-.42-.18-.83-.5-1.11L11 2.39Zm7.25 9.37a2.55 2.55 0 0 0-3.63 0l-.12.12-.12-.12a2.55 2.55 0 0 0-3.84.24 2.6 2.6 0 0 0 .21 3.41l3.43 3.46c.18.17.46.17.64 0l3.43-3.46c1-1 1-2.64 0-3.65Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});