/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Dumbbell",
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

   var pathdregular = "M14.6 7.38a.5.5 0 0 0 0-.7L13.32 5.4a.5.5 0 1 0-.7.7l1.27 1.28c.2.2.51.2.7 0ZM7.8 13.46a.5.5 0 0 1-.7.7L5.82 12.9a.5.5 0 0 1 .7-.71l1.28 1.27Zm9.36-10.61a1.47 1.47 0 0 0-2.07 0l-.62.62-.25-.25a1.85 1.85 0 0 0-2.84.28 2.27 2.27 0 0 0-2.1 3.83l.66.66L8 9.96l-.66-.66a2.27 2.27 0 0 0-3.83 2.09 1.85 1.85 0 0 0-.28 2.84l.25.25-.64.64a1.47 1.47 0 0 0 2.07 2.07l.64-.64.24.25a1.85 1.85 0 0 0 2.85-.28 2.27 2.27 0 0 0 2.09-3.83l-.66-.66 1.97-1.97.66.66a2.27 2.27 0 0 0 3.82-2.1 1.85 1.85 0 0 0 .28-2.84l-.24-.24.62-.62c.57-.57.57-1.5 0-2.07Zm-1.33 1.98-.66-.66.62-.62a.47.47 0 1 1 .66.66l-.62.62Zm-4.52 4.52-1.97 1.97-.66-.66 1.97-1.96.66.65Zm-6.49 6.5-.64.63a.47.47 0 0 1-.66-.66l.64-.64.66.66Zm7.5-11.92a.85.85 0 0 1 1.2 0l2.56 2.56a.85.85 0 0 1-.34 1.4.5.5 0 0 0-.3.7A1.27 1.27 0 0 1 13.39 10L10 6.62a1.27 1.27 0 0 1 1.43-2.05.5.5 0 0 0 .69-.3c.04-.13.1-.24.2-.34Zm-7.5 6.08c.49-.5 1.3-.5 1.8 0L10 13.39a1.27 1.27 0 0 1-1.43 2.06.5.5 0 0 0-.68.3.85.85 0 0 1-1.4.34l-2.57-2.56a.85.85 0 0 1 .33-1.41.5.5 0 0 0 .3-.68A1.27 1.27 0 0 1 4.82 10Z";
   var pathdfilled = "M14.33 3.13a1.98 1.98 0 0 0-3 .22A2.4 2.4 0 0 0 9.2 7.43l1.02 1-1.07 1.08 1.36 1.36 1.07-1.07 1.01 1.02a2.4 2.4 0 0 0 4.08-2.13 1.98 1.98 0 0 0 .23-3l-.6-.6.52-.52a.97.97 0 0 0-1.37-1.37l-.52.52-.6-.6Zm.27 3.54a.5.5 0 1 1-.7.71l-1.28-1.27a.5.5 0 0 1 .7-.71l1.28 1.27ZM4.02 9.2a2.4 2.4 0 0 1 3.4 0l3.4 3.4a2.4 2.4 0 0 1-2.13 4.07 1.98 1.98 0 0 1-3 .23l-.6-.6-.54.53a.97.97 0 1 1-1.36-1.36l.54-.54-.6-.6a1.98 1.98 0 0 1 .22-3 2.4 2.4 0 0 1 .67-2.13Zm2.94 5.82a.5.5 0 0 0 0-.71L5.7 13.04a.5.5 0 0 0-.7.7l1.27 1.28c.2.2.5.2.7 0Z";
   
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