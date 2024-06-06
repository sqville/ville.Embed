/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextSuperscript",
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

   var pathdregular = "M15.58 3c-.46 0-.83.42-.83.86a.5.5 0 0 1-1 0 1.87 1.87 0 0 1 3.42-1.04c.36.55.37 1.27-.04 1.98-.21.36-.5.63-.79.86l-.42.3-.06.05-.34.24c-.32.24-.55.47-.67.75h2.1a.5.5 0 1 1 0 1H14.24a.5.5 0 0 1-.5-.5c0-1.04.6-1.62 1.17-2.05l.36-.26.06-.04.38-.28c.24-.19.42-.37.55-.58.25-.43.19-.73.07-.92a.89.89 0 0 0-.76-.37ZM12.8 4.22c.09.35.3.66.58.86L9.16 10l4.43 5.17a.5.5 0 1 1-.76.66L8.5 10.77l-4.34 5.06a.5.5 0 0 1-.75-.66L7.84 10 3.41 4.83a.5.5 0 1 1 .75-.66L8.5 9.23l4.3-5Z";
   var pathdfilled = "M15.33 3.25c-.3 0-.58.29-.58.61a.75.75 0 0 1-1.5 0 2.12 2.12 0 0 1 3.88-1.17c.42.64.42 1.46-.04 2.24-.23.4-.55.69-.84.92l-.44.32-.06.05-.33.23c-.14.1-.25.2-.35.3h1.62a.75.75 0 0 1 0 1.5h-2.64a.76.76 0 0 1-.05 0 .75.75 0 0 1-.75-.75c0-1.16.69-1.8 1.27-2.25L14.9 5l.06-.04.37-.28c.23-.18.38-.34.48-.5.21-.36.14-.57.08-.66a.64.64 0 0 0-.55-.26ZM9.5 10l2.85-3.33c.13-.56.39-1 .67-1.36a1.75 1.75 0 0 1-.68-.93L8.5 8.85 4.35 4A.75.75 0 1 0 3.22 5L7.52 10l-4.3 5.01a.75.75 0 1 0 1.13.98l4.15-4.84L12.64 16a.75.75 0 1 0 1.14-.98L9.48 10Z";
   
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